package com.desenvolvimentoweb.crudii.model;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "address_tb")
public class Address {

    @Id
    @JsonProperty("id")
    @Column(nullable = false, unique = true, name = "pk_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @JsonProperty("country")
    @Column(nullable = false, name = "desc_country")
    private String country;
    @JsonProperty("streetAddress")
    @Column(nullable = false, name = "desc_street_address")
    private String streetAddress;
    @JsonProperty("city")
    @Column(nullable = false, name = "desc_city")
    private String city;
    @JsonProperty("state")
    @Column(nullable = false,  name = "desc_state")
    private String state;
    @JsonProperty("postalCode")
    @Column(nullable = false,  name = "desc_postal_code")
    private String postalCode;
    @OneToMany(cascade = CascadeType.ALL)
    @Column(nullable = false, name = "fk_person")
    private Set<Person> persons;

}
