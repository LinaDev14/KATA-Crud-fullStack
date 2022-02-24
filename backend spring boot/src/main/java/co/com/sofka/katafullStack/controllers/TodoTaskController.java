package co.com.sofka.katafullStack.controllers;

import co.com.sofka.katafullStack.models.TodoTask;
import co.com.sofka.katafullStack.services.TodoTaskServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class TodoTaskController {

    @Autowired
    private TodoTaskServices todoTaskServices;

    /*
     * GET -> Consultar
     * POST -> Crear
     * PUT -> Modificar
     * DELETE -> Eliminar
     * */

    // http://localhost:8080/api/tasks
    @GetMapping("/tasks")
    public List<TodoTask> listTodoTasks(){
        return todoTaskServices.listTodoTask();
    }

}
