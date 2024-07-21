package com.desenvolvimentoweb.crudii.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "peaple_tb")
public class Person {

    @Id
    @JsonProperty("id")
    @Column(nullable = false, name = "pk_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @JsonProperty("firstName")
    @Column(nullable = false, name = "desc_first_name")
    private String firstName;
    @JsonProperty("lastName")
    @Column(nullable = false, name = "desc_last_name")
    private String lastName;
    @JsonProperty("email")
    @Column(nullable = false, name = "desc_email")
    private String email;
    @JsonProperty("address")
    @JoinColumn(name = "address_tb")
    @PrimaryKeyJoinColumn( name = "fk_first_name")
    @OneToOne(cascade = CascadeType.ALL)
    private Address address;

}
