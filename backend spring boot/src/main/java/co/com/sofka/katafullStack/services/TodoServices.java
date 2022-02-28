package co.com.sofka.katafullStack.services;

import co.com.sofka.katafullStack.models.Todo;
import co.com.sofka.katafullStack.repositories.TodoRespository;
import co.com.sofka.katafullStack.repositories.TodoTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoServices {

    @Autowired
    private TodoRespository todoRepository;

    @Autowired
    private TodoTaskRepository todoTaskRepository;

    // listar todas las tareas
    public List<Todo> listTodo(){
        return todoRepository.findAll();
    }

    // buscar tarea por id
    public Optional<Todo> findById(Long id){
        return todoRepository.findById(id);
    }

    // Crear nueva tarea
    public Todo save(Todo todo){
        return todoRepository.save(todo);
    }

    // Actualizar tarea
    public Todo updateTodo(Todo todo) {
        Optional<Todo> TodoData = todoRepository.findById(todo.getId());

        if(TodoData.isEmpty()){
            throw new IllegalArgumentException("La tarea no se encuentra en la base de datos");
        }

        return todoRepository.save(todo);
    }

    // borrar tarea
    public void deleteById(Long id){
        todoRepository.deleteById(id);
        todoTaskRepository.deleteAllByTodoId(id);
    }
}
