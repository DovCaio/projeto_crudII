package com.desenvolvimentoweb.crudii.exception;

public class ApplicationException extends RuntimeException{

    public ApplicationException() {
        super("Unexpected error.");
    }

    public ApplicationException(String message) {
        super(message);
    }

    public ApplicationException(String message, Throwable cause) {
        super(message, cause);
    }

}
