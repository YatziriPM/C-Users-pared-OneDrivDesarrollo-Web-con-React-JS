document.addEventListener("DOMContentLoaded", () => {
    const items = [];
  
    const addItem = () => {
      const text = document.getElementById("input").value;
      items.push({
        completed: false,
        text: text,
      });
      render();
    };
  
    const render = () => {
      const h1 = React.createElement(
        "h1",
        {
          id: "title",
          className: "x-1",
          style: {
            color: "red",
            backgroundColor: "blue",
            borderRadius: "5px",
          },
        },
        "Mi primera aplicación React"
      );
  
      const form = React.createElement("div", null, [
        React.createElement(
          "input",
          { id: "input", type: "text", placeholder: "Nueva tarea" },
          null
        ),
        React.createElement(
          "button",
          { id: "button", onClick: addItem },
          "Agregar"
        ),
      ]);

      const list = React.createElement(
        "ul",
        null,
        items.map((item) => {
          return React.createElement("li", null, item.text);
        })
      );
  
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render([h1, form, list]);
    };
  
    render();
  });
