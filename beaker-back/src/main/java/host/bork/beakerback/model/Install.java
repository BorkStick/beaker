package host.bork.beakerback.model;


import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "installs")
public class Install implements Serializable {

    //Id
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long installId;


    // Owner ID
    @Column(name = "ownerId", length = 10, nullable = false)
    private long ownerId;

    // Install Name
    @Column(name = "ownerUserName", length = 100, nullable = false)
    private String ownerUserName;

    // Install Name
    @Column(name = "installName", length = 100, nullable = false)
    private String installName;

    // Created Date
    //@Temporal(TemporalType.DATE)
    @CreationTimestamp
    @Column(name = "createdAt", nullable = false)
    private Date createdAt;

    // Temporary domain "installName.bork.host"
    @Column(name = "tempDomain", length = 100, nullable = false)
    private String tempDomain;

    // Domain
    @Column(name = "domain", length = 100, nullable = false)
    private String domain;

    // Domain
    @Column(name = "serverIp", length = 100, nullable = false)
    private String serverIp;



    // Getters and Setters
    public String getTempDomain() {
        return tempDomain;
    }

    public void setTempDomain(String tempDomain) {
        this.tempDomain = tempDomain;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public String getInstallName() {
        return installName;
    }

    public void setInstallName(String installName) {
        this.installName = installName;
    }

    public void setInstallId(long installId) {
        this.installId = installId;
    }

    public long getInstallId() {
        return installId;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public String getServerIp() {
        return serverIp;
    }

    public void setServerIp(String serverIp) {
        this.serverIp = serverIp;
    }

    public long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(long ownerId) {
        this.ownerId = ownerId;
    }

    public String getOwnerUserName() {
        return ownerUserName;
    }

    public void setOwnerUserName(String ownerUserName) {
        this.ownerUserName = ownerUserName;
    }
}