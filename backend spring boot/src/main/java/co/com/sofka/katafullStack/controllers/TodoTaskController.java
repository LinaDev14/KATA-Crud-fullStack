package co.com.sofka.katafullStack.controllers;

import co.com.sofka.katafullStack.models.TodoTask;
import co.com.sofka.katafullStack.services.TodoTaskServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    // mostrar grupo de tarea
    // http://localhost:8080/api/tasks
    @GetMapping("/tasks")
    public List<TodoTask> listTodoTasks(){
        return todoTaskServices.listTodoTask();
    }

    // buscar por id
    // http://localhost:8080/api/task/{id}
    @GetMapping("/task/{id}")
    public Optional<TodoTask> findById(@PathVariable Long id) {
        return todoTaskServices.findById(id);
    }

    // Buscar por todoId
    @GetMapping("/tasks/todoId/{id}")
    public List<TodoTask> findAllByTodoId(@PathVariable Long todoId){
        return todoTaskServices.findAllByTodoId(todoId);
    }

    // Crear nuevo task en tareas
    @PostMapping("task/create")
    public TodoTask save(@RequestBody TodoTask todotask){
        return todoTaskServices.save(todotask);
    }

    // Actualizar task en tareas
    public TodoTask updateTodo(TodoTask todotask) {
        Optional<TodoTask> TodoTaskData = todoTaskServices.findById(todotask.getId());

        if(TodoTaskData.isEmpty()){
            throw new IllegalArgumentException("El grupo de tareas no se encuentra en la base de datos");
        }

        return todoTaskServices.save(todotask);
    }

    // borrar task en tareas
    public void deleteById(Long id){
        todoTaskServices.deleteById(id);
    }


}
