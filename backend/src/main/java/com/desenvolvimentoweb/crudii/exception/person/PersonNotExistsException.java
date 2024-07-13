package com.desenvolvimentoweb.crudii.exception.person;

import com.desenvolvimentoweb.crudii.exception.ApplicationException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class PersonNotExistsException extends ApplicationException {

    public PersonNotExistsException(){

        super("Person not found!");

    }

}
