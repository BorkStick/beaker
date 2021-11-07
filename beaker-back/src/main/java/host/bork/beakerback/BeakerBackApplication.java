package host.bork.beakerback;

import host.bork.beakerback.model.Install;
import host.bork.beakerback.repository.InstallRepository;
import host.bork.beakerback.model.User;
import host.bork.beakerback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class BeakerBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(BeakerBackApplication.class, args);
	}


	// adds stuff to the database
	@Bean
	@Autowired
	CommandLineRunner runner1(InstallRepository installRepository) {
		return (args) -> {
			long count = installRepository.count();

			if (count == 0) {
				SimpleDateFormat df = new SimpleDateFormat("MM/dd/yyyy");

				try {
					Install borkhost = new Install();
					borkhost.setInstallName("borkhost");
					borkhost.setOwnerId(1);
					borkhost.setOwnerUserName("borkhost");
					borkhost.setTempDomain("https://borkhost.bork.host");
					borkhost.setDomain("https://bork.host");
					borkhost.setServerIp("10.0.0.68");
//					Date date = df.parse("1/1/2018");
//					borkhost.setCreatedAt(date);

					//
					Install borktech = new Install();
					borktech.setInstallName("borktech");
					borktech.setOwnerId(2);
					borktech.setOwnerUserName("tylorwurz");
					borktech.setTempDomain("https://borktech.bork.host");
					borktech.setDomain("https://bork.tech");
					borktech.setServerIp("10.0.0.80");
//					date = df.parse("10/1/2021");
//					borktech.setCreatedAt(date);

					Install tylorninja = new Install();
					tylorninja.setInstallName("tylorninja");
					tylorninja.setOwnerId(2);
					tylorninja.setOwnerUserName("tylorwurz");
					tylorninja.setTempDomain("https://tylorninja.bork.host");
					tylorninja.setDomain("https://tylor.ninja");
					tylorninja.setServerIp("10.0.0.80");
//					date = df.parse("12/10/2000");
//					tylorninja.setCreatedAt(date);

					Install borklol = new Install();
					borklol.setInstallName("borklol");
					borklol.setOwnerId(3);
					borklol.setOwnerUserName("terryfromit");
					borklol.setTempDomain("https://borklol.bork.host");
					borklol.setDomain("https://bork.lol");
					borklol.setServerIp("10.0.0.80");
//					date = df.parse("12/10/2000");
//					borklol.setCreatedAt(date);

					installRepository.save(borkhost);
					installRepository.save(borktech);
					installRepository.save(tylorninja);
					installRepository.save(borklol);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		};
	}

	@Bean
	@Autowired
	CommandLineRunner runner2(UserRepository userRepository) {
		return (args) -> {
			long count2 = userRepository.count();

			if (count2 == 0) {


				try {
					User borkhost = new User();
					borkhost.setUserName("borkhost");
					borkhost.setFirstName("Bork");
					borkhost.setLastName("Host");
					borkhost.setEmail("admin@bork.host");


					User tylorwurz = new User();
					tylorwurz.setUserName("tylorwurz");
					tylorwurz.setFirstName("Tylor");
					tylorwurz.setLastName("Wurz");
					tylorwurz.setEmail("tylor@bork.host");


					User terryfromit = new User();
					terryfromit.setUserName("terryfromit");
					terryfromit.setFirstName("Terry");
					terryfromit.setLastName("Fromit");
					terryfromit.setEmail("terry.fromit@bork.host");




					userRepository.save(borkhost);
					userRepository.save(tylorwurz);
					userRepository.save(terryfromit);


				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		};
	}

}
