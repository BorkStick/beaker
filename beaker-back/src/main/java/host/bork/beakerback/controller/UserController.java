package host.bork.beakerback.controller;

import host.bork.beakerback.model.Install;
import host.bork.beakerback.model.User;
import host.bork.beakerback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController

@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // do CRUD Create Read Update Delete

    // CREATE
    // create user
    @PostMapping("/add")
    public User createUser(@Valid @RequestBody User user) {
        return userRepository.save(user);
    }

    // READ
    // get all users
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> index() {
        Iterable<User> usersIterable = userRepository.findAll();
        List<User> userList = new ArrayList<>();
        usersIterable.forEach(a -> userList.add(a));
        return userList;
    }

    // get user by user name (localhost:8080/api/users/username)
    @GetMapping(value = "/{value}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> getByUserName(@PathVariable("value") String userName) {
        Iterable<User> usersIterable = userRepository.findByUserNameContainingIgnoreCase(userName);
        List<User> userList = new ArrayList<>();
        usersIterable.forEach(a -> userList.add(a));
        return userList;
    }

    // get user by user ID (localhost:8080/api/users/4)
    @GetMapping(value = "/id/{value}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> getByUserId(@PathVariable("value") Long userId) {
        Iterable<User> usersIterable = userRepository.findByUserId(userId);
        List<User> userList = new ArrayList<>();
        usersIterable.forEach(a -> userList.add(a));
        return userList;
    }

    //UPDATE
    //update user info

    //DELETE
    //delete user


}