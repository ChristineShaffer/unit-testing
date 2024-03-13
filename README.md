# Unit Testing

## Principles

- Unit tests should be:

  | Principle | Description                                                     | Outcome if Violated                                                                                                                                                                                                                    |
  |-----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
  |Isolated | Tests the unit only, not other files/functions/apis, etc. | - Making changes in other files causes unrelated tests to fail<br/>- Hard to trace failures<br/>- Bugs in 3rd party libraries or APIs cause tests to fail<br/>- Wasted testing resources testing things that aren't our responsibility |
  |Outcome-Driven| Tests the outcome rather than the implementation details        | - Making minor code changes breaks tests <br/>- Hard to read tests and add to them<br/>- Debugging failing tests is difficult                                                                                                          |
  | Fast | On the order of milliseconds each                               | - Tests can time out<br/>- Tests are less likely to be run frequently<br/>- Make test-driven development pretty much impossible<br/>- Costs extra resources to run                                                                     |
  | Idempotent | Has the same result for every run                               | - Silent bugs since the run could pass when it should have failed<br/>- Hard to debug                                                                                                                                                  |
  | Atomic | The order in which the tests are run does not affect the result | - Silent bugs since the run could pass when it should have failed<br/>- Hard to debug                                                                                                                                                  |

- "Flakiness" generally results from violating at least one of these principles.
- It makes tests hard to maintain, run, update, etc. and costs extra resources (people and machines).

## Sample Files

### tests/atomicity_1.spec.js
  - Run it in its current state. The suite passes.
  - Put the first test second. The suite fails.
  - Refactor with a `beforeEach` block (see tests_refactored/atomicity_1.spec.js). The suite passes.

### tests/atomicity_2.spec.js
  - Run it in its current state. The suite passes.
  - Put the first describe block second. The suite fails.
  - Refactor with a `beforeEach` block (see tests_refactored/atomicity_2.spec.js). The suite passes.

### tests/idempotency.spec.js
  - Run it in its current state. The suite *likely* fails.
  - Keep running it until it passes, i.e. until the user ID is 1.
  - Solution 1: Refactor the test to check the properties of the user ID instead of the actual ID (see 
    tests_refactored/idempotency_1.spec.js).
  - Solution 2: Refactor the User class to generate the ID using an external function then stub that function (see 
    tests_refactored/idempotency_2.spec.js).
  - Solution 3: Refactor the User class to take an ID through dependency injection (see 
    tests_refactored/idempotency_3.spec.js).