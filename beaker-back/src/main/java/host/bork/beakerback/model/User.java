package host.bork.beakerback.model;


import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "users")
public class User implements Serializable {

    //Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    // user Name
    @Column(name = "userName", length = 100, nullable = false)
    private String userName;

    // first Name
    @Column(name = "firstName", length = 100, nullable = false)
    private String firstName;

    // last Name
    @Column(name = "lastName", length = 100, nullable = false)
    private String lastName;

    // Created Date
//    @Temporal(TemporalType.DATE)
    @CreationTimestamp
    @Column(name = "createdAt", nullable = false)
    private Date createdAt;

    // email"
    @Column(name = "email", length = 100, nullable = false)
    private String email;




    // Getters and Setters

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}