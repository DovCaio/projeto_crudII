package com.desenvolvimentoweb.crudii.service;

import com.desenvolvimentoweb.crudii.dto.person.PersonPostPutRequestDTO;
import com.desenvolvimentoweb.crudii.dto.person.PersonResponseDTO;
import com.desenvolvimentoweb.crudii.enums.IdentificationType;
import com.desenvolvimentoweb.crudii.exception.person.PersonNotExistsException;
import com.desenvolvimentoweb.crudii.model.Person;
import com.desenvolvimentoweb.crudii.repository.PersonRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Bean
    private ModelMapper personMapper(){

        return new ModelMapper();

    }

    private Person convertByRequestDTO(PersonPostPutRequestDTO personPostPutRequestDTO){

        return personMapper().map(personPostPutRequestDTO, Person.class);
    }

    private PersonResponseDTO convertToResponseDTO(Person person){

        return personMapper().map(person, PersonResponseDTO.class);

    }

    public PersonResponseDTO createPerson(PersonPostPutRequestDTO personPostPutRequestDTO){
        Person person = convertByRequestDTO(personPostPutRequestDTO);

        return convertToResponseDTO(personRepository.save(person));

    }


    public PersonResponseDTO updatePerson(Long id,PersonPostPutRequestDTO personPostPutRequestDTO){
        if (!personRepository.existsById(id)) throw new PersonNotExistsException();

        Person person = convertByRequestDTO(personPostPutRequestDTO);
        person.setId(id);

        return convertToResponseDTO(personRepository.save(person));

    }

    public void deletePerson(Long id){
        if (!personRepository.existsById(id)) throw new PersonNotExistsException();
        personRepository.deleteById(id);
    }

    public PersonResponseDTO getAPerson(Long id){
        if (!personRepository.existsById(id)) throw new PersonNotExistsException();

        return convertToResponseDTO(personRepository.getById(id));

    }

    public List<PersonResponseDTO> getAllPersons(){

        return personRepository.findAll().stream()
                .map(p -> convertToResponseDTO(p))
                .collect(Collectors.toList());

    }

    public Set<Person> getByIdentification(IdentificationType queryType, String identification){

        Set<Person> result = new HashSet<>();

        switch (queryType){

            case ID -> {

                result.add(personRepository.findById(Long.parseLong(identification)));

            }

            case FIRSTNAME -> {

                result = personRepository.findAllByFirstName(identification);

            }

            case LASTNAME -> {

                result = personRepository.findAllByLastName(identification);

            }

            case CONTRY -> {

                result = personRepository.findAllByAddress_Contry(identification);

            }

        }

        return result;

    }

}
