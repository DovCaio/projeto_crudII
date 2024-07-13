package com.desenvolvimentoweb.crudii.dto.person;


import com.desenvolvimentoweb.crudii.dto.address.AddressPostPutRequestDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PersonPostPutRequestDTO {

    @JsonProperty("firtName")
    private String firstName;
    @JsonProperty("lastName")
    private String lastName;
    @JsonProperty("email")
    private String email;
    @JsonProperty("address")
    private AddressPostPutRequestDTO address;



}
