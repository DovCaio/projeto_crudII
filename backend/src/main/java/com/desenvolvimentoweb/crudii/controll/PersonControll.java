package com.desenvolvimentoweb.crudii.controll;

import com.desenvolvimentoweb.crudii.dto.person.PersonPostPutRequestDTO;
import com.desenvolvimentoweb.crudii.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
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


    @PutMapping
    public ResponseEntity<?> put(@PathVariable("id") Long id ,
                                @RequestBody PersonPostPutRequestDTO person) {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(personService.updatePerson(id, person));

    }

}
