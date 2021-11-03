package host.bork.beakerback.controller;

import host.bork.beakerback.model.User;
import host.bork.beakerback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController

@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> index() {
        Iterable<User> usersIterable = userRepository.findAll();
        List<User> userList = new ArrayList<>();
        usersIterable.forEach(a -> userList.add(a));
        return userList;
    }

    @GetMapping(value = "/{value}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> getByUserName(@PathVariable("value") String userName) {
        Iterable<User> usersIterable = userRepository.findByUserNameContainingIgnoreCase(userName);
        List<User> userList = new ArrayList<>();
        usersIterable.forEach(a -> userList.add(a));
        return userList;
    }


}