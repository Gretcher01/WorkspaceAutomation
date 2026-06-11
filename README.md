# ⚡ CortexFlow:  Low-Code AI Platform

**CortexFlow** is a sleek, high-performance, low-code platform designed for visual AI workflow creation. Utilizing a node-based drag-and-drop architecture, CortexFlow allows developers and AI engineers to build, validate, and execute complex multi-step reasoning pipelines, reducing time-to-setup by **60%**.

---

## 🌟 Key Highlights
- **🚀 60% Setup Time Reduction**: Move from conceptualizing multi-step AI agents to deployment in minutes instead of hours.
- **🧬 DAG-Based Execution**: Advanced backend parser validates and executes pipelines structured as Directed Acyclic Graphs (DAGs) to prevent infinite loops and ensure reliable state transitions.
- **🤖 LLM-Driven Agents**: Seamlessly integrate Large Language Models (LLMs) with condition blocks, input variables, text parsers, and custom delays for multi-step reasoning.
- **🎨 Modern Developer UX**: Beautiful, minimalist interface featuring a floating custom navbar, drag-and-drop node selector, and a fully interactive flow canvas.

---

## 🛠️ Technology Stack
CortexFlow is architected with a hybrid developer stack optimized for high performance, ease of expansion, and cross-platform compatibility:

- **Frontend**: React, React Flow (interactive node-based canvas), Zustand (lightweight global state management), React Icons.
- **Backend**: Python, FastAPI (ultra-fast, async Python web framework), Uvicorn (ASGI server).
- **Core Design**: MERN-ready architecture, structured for seamless integration with MongoDB/Express, paired with a custom styled responsive layout.

---

## 🎛️ Nodes Included out-of-the-box
CortexFlow comes pre-loaded with **9 interactive node types**:
1. **📥 Input Node**: Capture text or file imports to pass down your pipeline.
2. **🧠 LLM Node**: Configure prompt templates and system instructions to process workflow data.
3. **📤 Output Node**: Capture final workflow results and trigger downstream integrations.
4. **📝 Text Node**: Inline text variables with support for dynamic HTML input height.
5. **🧮 Math Node**: Execute algebraic or mathematical operations on numeric node inputs.
6. **⚖️ Logic Node**: Conditional routing blocks (AND, OR, NOT) to control flow execution.
7. **🖼️ Image Node**: Pass and transform image data across the workspace.
8. **⏱️ Delay Node**: Inject temporal delays between execution blocks for asynchronous queuing.
9. **🔀 Switch Node**: Multi-route conditional routing based on variable evaluations.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Python 3.8+](https://www.python.org/)

---

### 1. Backend Setup
The backend runs on Python using FastAPI to evaluate and parse workflows, including topological sorting for DAG validation.

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
pip install fastapi uvicorn python-multipart

# Start the development server
python -m uvicorn main:app --reload
```
The backend will be running on: **`http://localhost:8000`**

---

### 2. Frontend Setup
The frontend uses React and React Flow to manage the visual editor and canvas.

```bash
# Navigate to the frontend directory
cd frontend

# Install package dependencies
npm install

# Start the frontend app
npm start
```
The frontend will be running on: **`http://localhost:3000`**

---

## 🔮 Future Roadmap
- [ ] **Database Integration**: Connect MongoDB for saving and sharing pipelines.
- [ ] **Agent Execution Logs**: Live visual debugger showing logs at each node during execution.
- [ ] **API Export**: One-click export of any CortexFlow canvas into a deployable REST API endpoint.
