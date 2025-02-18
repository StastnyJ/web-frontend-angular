/**
 * web-backend-swagger
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface ProfileEdit { 
    email: string;
    nick_name?: string;
    first_name: string;
    last_name: string;
    gender: string;
    short_info: string;
    github: string | null;
    addr_street: string;
    addr_city: string;
    addr_zip: string;
    addr_country: string;
    school_name: string;
    school_street: string;
    school_city: string;
    school_zip: string;
    school_country: string;
    school_finish: number;
    tshirt_size: string;
    notify_eval?: boolean;
    notify_response?: boolean;
    notify_ksi?: boolean;
    notify_events?: boolean;
}