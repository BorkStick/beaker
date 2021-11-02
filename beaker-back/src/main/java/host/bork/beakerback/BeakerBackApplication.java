package host.bork.beakerback;

import host.bork.beakerback.model.Install;
import host.bork.beakerback.repository.InstallRepository;
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
	CommandLineRunner runner(InstallRepository installRepository) {
		return (args) -> {
			long count = installRepository.count();

			if (count == 0) {
				SimpleDateFormat df = new SimpleDateFormat("MM/dd/yyyy");

				try {
					Install borkhost = new Install();
					borkhost.setInstallName("borkhost");
					borkhost.setTempDomain("https://borkhost.bork.host");
					borkhost.setDomain("https://bork.host");
					borkhost.setServerIp("10.0.0.68");
					Date date = df.parse("1/1/2018");
					borkhost.setCreatedAt(date);

					//
					Install borktech = new Install();
					borktech.setInstallName("borktech");
					borktech.setTempDomain("https://borktech.bork.host");
					borktech.setDomain("https://bork.tech");
					borktech.setServerIp("10.0.0.80");
					date = df.parse("10/1/2021");
					borktech.setCreatedAt(date);

					Install tylorninja = new Install();
					tylorninja.setInstallName("tylorninja");
					tylorninja.setTempDomain("https://tylorninja.bork.host");
					tylorninja.setDomain("https://tylor.ninja");
					tylorninja.setServerIp("10.0.0.80");
					date = df.parse("12/10/2000");
					tylorninja.setCreatedAt(date);

					installRepository.save(borkhost);
					installRepository.save(borktech);
					installRepository.save(tylorninja);
				} catch (ParseException e) {
					e.printStackTrace();
				}
			}
		};
	}

}
