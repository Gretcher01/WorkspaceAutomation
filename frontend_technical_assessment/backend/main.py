import json
from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


origins = [
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

def is_dag(nodes, edges):
    
    in_degree = { node["id"]: 0 for node in nodes }
    graph = { node["id"]: [] for node in nodes }

    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")
        if source is None or target is None:
            continue  
        graph[source].append(target)
        if target in in_degree:
            in_degree[target] += 1
        else:
            in_degree[target] = 1

 
    queue = [node_id for node_id, deg in in_degree.items() if deg == 0]
    visited_count = 0

    while queue:
        current = queue.pop(0)
        visited_count += 1
        for neighbor in graph[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    return visited_count == len(nodes)


@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    
    try:
        pipeline_data = json.loads(pipeline)
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Invalid JSON in pipeline")
    
    nodes = pipeline_data.get("nodes", [])
    edges = pipeline_data.get("edges", [])

    num_nodes = len(nodes)
    num_edges = len(edges)

   
    dag = is_dag(nodes, edges)

    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": dag}
