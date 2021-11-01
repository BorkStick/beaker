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


	@Bean
	@Autowired
	CommandLineRunner runner(InstallRepository installRepository) {
		return (args) -> {
			long count = installRepository.count();

			if (count == 0) {
				SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");

				try {
					Install borkhost = new Install();
					borkhost.setTitle("borkhost");
					borkhost.setBody("Install1 Install1Install1 Install1 Install1");
					Date date = df.parse("10/5/2018");
					borkhost.setCreatedAt(date);

					//
					Install borktech = new Install();
					borktech.setTitle("borktech");
					borktech.setBody("Install2 Install2 Install2 Install2");
					date = df.parse("2/3/2017");
					borktech.setCreatedAt(date);

					installRepository.save(borkhost);
					installRepository.save(borktech);
				} catch (ParseException e) {
					e.printStackTrace();
				}
			}
		};
	}

}
