# SSO SAML test

## SimpleSamPHP Idp Docker container
```
docker pull kristophjunge/test-saml-idp
```
```
docker run --name=testsamlidp -p 8080:8080 -p 8443:8443 \
-e SIMPLESAMLPHP_SP_ENTITY_ID=saml-poc \
-e SIMPLESAMLPHP_SP_ASSERTION_CONSUMER_SERVICE=http://localhost:4300/login/callback \
-d kristophjunge/test-saml-idp
```

Now you can navigate http://localhost:8080/simplesaml and use:
```
UID | Username | Password  | Group  | Email
==================================================================
1   | user1    | user1pass | group1 | user1@example.com 
2   | user2    | user2pass | group2 | user2@example.com
```

## Run
```
cd backend && node index
cd frontend && npm start
```

Try login into http://localhost:3000/