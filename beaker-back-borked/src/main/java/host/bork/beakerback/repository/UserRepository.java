package host.bork.beakerback.repository;

import host.bork.beakerback.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

    public List<User> findByUserNameContainingIgnoreCase(String userId);


}