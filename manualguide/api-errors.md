# Groq API Error Codes and Responses

## Overview
The Groq API uses standard HTTP response status codes to indicate success or failure of requests. <mcreference link="https://console.groq.com/docs/errors" index="2">2</mcreference>

## Success Codes
- **200 OK**: The request was successfully executed. No further action needed.

## Client Error Codes

### 400 Bad Request
- **Description**: Server could not understand the request due to invalid syntax
- **Action**: Review request format and ensure it is correct

### 401 Unauthorized  
- **Description**: Request lacks valid authentication credentials
- **Action**: Ensure request includes necessary authentication credentials and API key is valid

### 404 Not Found
- **Description**: The requested resource could not be found
- **Action**: Check the request URL and existence of the resource

### 413 Request Entity Too Large
- **Description**: The request body is too large
- **Action**: Reduce the size of the request body

### 422 Unprocessable Entity
- **Description**: Request was well-formed but could not be followed due to semantic errors
- **Action**: Verify the data provided for correctness and completeness

### 429 Too Many Requests
- **Description**: Too many requests sent in given timeframe
- **Action**: Implement request throttling and respect rate limits

### 498 Custom: Flex Tier Capacity Exceeded
- **Description**: Custom status code when flex tier is at capacity
- **Action**: Try again later

### 499 Custom: Request Cancelled
- **Description**: Custom status code when request is cancelled by caller
- **Action**: Check client-side cancellation logic

## Server Error Codes

### 500 Internal Server Error
- **Description**: Generic error occurred on the server
- **Action**: Try request again later or contact support if issue persists

### 502 Bad Gateway
- **Description**: Server received invalid response from upstream server
- **Action**: May be temporary issue; retrying might resolve it

### 503 Service Unavailable
- **Description**: Server not ready to handle request (maintenance/overload)
- **Action**: Wait before retrying the request

## Informational Codes

### 206 Partial Content
- **Description**: Only part of resource being delivered (range headers)
- **Action**: Ensure this is expected for the request being made

## Error Object Structure
```json
{
  "error": {
    "message": "String - description of the specific error",
    "type": "invalid_request_error"
  }
}
```

### Components
- **error (object)**: Primary container for error details
- **message (string)**: Descriptive message explaining the error nature
- **type (string)**: Classification of error type (e.g., "invalid_request_error")

## Current Implementation Status
- ✅ Basic error handling exists in API routes
- ❌ Need comprehensive error handling for all Groq-specific errors
- ❌ Need user-friendly error messages in UI
- ❌ Need retry logic for temporary errors (502, 503)
- ❌ Need rate limiting handling (429)
- ❌ Need proper error logging and monitoring