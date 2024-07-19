package com.desenvolvimentoweb.crudii.repository;

import com.desenvolvimentoweb.crudii.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long>  {

    public Person findById(long id);
    public Set<Person> findAllByFirstName(String firstName);
    public Set<Person> findAllByLastName(String lastName);
    public Set<Person> findAllByAddress_Contry(String contry);


}
