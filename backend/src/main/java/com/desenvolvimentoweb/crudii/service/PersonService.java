package com.desenvolvimentoweb.crudii.service;

import com.desenvolvimentoweb.crudii.dto.person.PersonPostPutRequestDTO;
import com.desenvolvimentoweb.crudii.model.Person;
import com.desenvolvimentoweb.crudii.repository.PersonRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Bean
    private ModelMapper personMapper(){

        return new ModelMapper();

    }

    private Person convert(PersonPostPutRequestDTO personPostPutRequestDTO){

        return personMapper().map(personPostPutRequestDTO, Person.class);
    }

    public Person createPerson(PersonPostPutRequestDTO personPostPutRequestDTO){
        Person person = convert(personPostPutRequestDTO);

        return personRepository.save(person);

    }


    public void updatePerson(Long id,PersonPostPutRequestDTO personPostPutRequestDTO){
        Person person = convert(personPostPutRequestDTO);
        person.setId(id);

        personRepository.save(person);

    }

    public void deletePerson(Long id){
        personRepository.deleteById(id);
    }

    public Person getAPerson(Long id){

        return personRepository.getById(id);

    }

}
