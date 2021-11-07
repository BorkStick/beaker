package host.bork.beakerback.repository;

import host.bork.beakerback.model.Install;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface InstallRepository extends CrudRepository<Install, Long> {

    List<Install> findByInstallNameContainingIgnoreCase(String installName);
    List<Install> deleteByInstallName(String installName);
    List<Install> findByInstallId(Long installId);
    List<Install> findByOwnerId(Long ownerId);
    List<Install> findByCreatedAtAfter(Date date);
}