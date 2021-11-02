package host.bork.beakerback.controller;

import host.bork.beakerback.model.Install;
import host.bork.beakerback.repository.InstallRepository;
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
@RequestMapping("/installs")
public class InstallController {

    @Autowired
    private InstallRepository installRepository;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Install> index() {
        Iterable<Install> installsIterable = installRepository.findAll();
        List<Install> installList = new ArrayList<>();
        installsIterable.forEach(a -> installList.add(a));
        return installList;
    }

    @GetMapping(value = "/{value}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Install> getByInstallName(@PathVariable("value") String installName) {
        Iterable<Install> installsIterable = installRepository.findByInstallNameContainingIgnoreCase(installName);
        List<Install> installList = new ArrayList<>();
        installsIterable.forEach(a -> installList.add(a));
        return installList;
    }

    @GetMapping(value = "/date/{after}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Install> getByDate(@PathVariable("after") @DateTimeFormat(pattern = "MM-dd-yyyy") Date date) {
        Iterable<Install> installsIterable = installRepository.findByCreatedAtAfter(date);
        List<Install> installList = new ArrayList<>();
        installsIterable.forEach(a -> installList.add(a));
        return installList;
    }
}