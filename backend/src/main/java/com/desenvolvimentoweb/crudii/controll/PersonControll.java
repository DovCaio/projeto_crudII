package com.desenvolvimentoweb.crudii.controll;

import com.desenvolvimentoweb.crudii.dto.person.PersonPostPutRequestDTO;
import com.desenvolvimentoweb.crudii.enums.IdentificationType;
import com.desenvolvimentoweb.crudii.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/persons", produces = MediaType.APPLICATION_JSON_VALUE)
public class PersonControll {

    @Autowired
    private PersonService personService;

    @PostMapping
    public ResponseEntity<?> post(@RequestBody PersonPostPutRequestDTO person) {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(personService.createPerson(person));

    }


    @PutMapping("/{id}")
    public ResponseEntity<?> put(@PathVariable("id") Long id ,
                                @RequestBody PersonPostPutRequestDTO person) {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(personService.updatePerson(id, person));

    }

    @GetMapping("{id}")
    public ResponseEntity<?> get(@PathVariable("id") Long id) {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(personService.getAPerson(id));

    }

    @GetMapping
    public ResponseEntity<?> getAll() {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(personService.getAllPersons());

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        personService.deletePerson(id);
        return ResponseEntity
                .status(HttpStatus.NO_CONTENT)
                .build();

    }


    @GetMapping("/{identificationType}/{identification}")
    public ResponseEntity<?> getBySomeIndentification(
            @PathVariable("identificationType") IdentificationType identificationType,
            @PathVariable("identification") String identification){

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(personService.getByIdentification(identificationType, identification));

    }

    @GetMapping("/totalPersons")
    public ResponseEntity<?> getTotalPersons() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(personService.getTotalPerson());
    }
}
