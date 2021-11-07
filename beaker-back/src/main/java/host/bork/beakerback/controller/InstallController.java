package host.bork.beakerback.controller;

import host.bork.beakerback.model.Install;
import host.bork.beakerback.repository.InstallRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/installs")
public class InstallController {

    @Autowired
    private InstallRepository installRepository;

    // do CRUD Create Read Update Delete

    // CREATE
    // create install
    @PostMapping("/add")
    public Install createInstall(@Valid @RequestBody Install install) {
        return installRepository.save(install);
    }

    // READ
    // get all installs
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Install> index() {
        Iterable<Install> installsIterable = installRepository.findAll();
        List<Install> installList = new ArrayList<>();
        installsIterable.forEach(a -> installList.add(a));
        return installList;
    }

    // get install by install name
    @GetMapping(value = "/{value}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Install> getByInstallName(@PathVariable("value") String installName) {

        Iterable<Install> installsIterable = installRepository.findByInstallNameContainingIgnoreCase(installName);
        List<Install> installList = new ArrayList<>();
        installsIterable.forEach(a -> installList.add(a));
        return installList;
    }

    // UPDATE
    // update install


    // DELETE
    // delete install

    //
}