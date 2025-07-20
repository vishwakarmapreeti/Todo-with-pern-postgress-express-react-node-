# PERN Todo App
A full-stack Todo List application built using PostgreSQL, Express, React, and Node.js, styled with React-Bootstrap.



features 
- Add, edit, and delete todo tasks
- Responsive UI using React-Bootstrap
- Modal editing functionality
- RESTful API integration


Technologies Used
- React
- React-Bootstrap
- Bootstrap CSS


Others:
- Vite (for React dev server)


Frontend Setup
cd client
npm install
npm run dev


How It Works

Adding a Todo:
Input in the text field → Click on “Add”

Data is sent to backend via POST /todos

Editing a Todo:
Click on Edit → A modal opens

Make changes → Click Save (calls PUT /todos/:id)

Deleting a Todo:
Click on Delete (calls DELETE /todos/:id)


 Future Enhancements

- Authentication system (JWT)
- Pagination or filtering
- Drag-and-drop for ordering






