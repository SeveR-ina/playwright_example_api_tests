import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import logger from "../utils/logger";

test("GET Users from JSONPlaceholder", async ({ page }) => {
  logger.info("Starting the test...");

  const response = await page.request.get(`/users`);

  logger.info("GET request to JSONPlaceholder made.");

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  logger.info("Response received successfully.");

  expect(responseBody.length).toBeGreaterThan(0);
  expect(responseBody[0].name).toBeTruthy();
  expect(responseBody[0].email).toBeTruthy();

  logger.info("Test completed.");
});

const userForTesting = {
  name: faker.person.fullName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
};

test("POST Users to JSONPlaceholder", async ({ page }) => {
  logger.info("Starting POST Users test...");
  logger.info(`POST Request Data: ${JSON.stringify(userForTesting)}`);

  const response = await page.request.post(`/users`, {
    data: JSON.stringify(userForTesting),
    headers: {
      "Content-Type": "application/json",
    },
  });

  logger.info("POST request to JSONPlaceholder made.");

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  logger.info(`POST Response Data: ${JSON.stringify(responseBody)}`);

  logger.info("POST Request Successful.");

  expect(responseBody.id).toBeTruthy();
  expect(responseBody.name).toBe(userForTesting.name);
  expect(responseBody.username).toBe(userForTesting.username);
  expect(responseBody.email).toBe(userForTesting.email);

  logger.info("POST Users test completed.");
});
