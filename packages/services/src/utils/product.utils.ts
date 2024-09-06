// Products utility functions
import { ProductDetails } from "@artisan-commerce/types";

/**
 * This function is used to transform the details of the product because the
 * artisn library does not yet support an undefined array of questions in the
 * answers.
 *
 * This function will be removed when the artisn library supports this
 * functionality
 */
export const normalizeProductDetails = (
  product: ProductDetails
): ProductDetails => {
  const { questions = [] } = product;
  return {
    ...product,
    questions: questions.map(question => {
      const { answers = [] } = question;
      return {
        ...question,
        answers: answers.map(answer => {
          const { questions = [] } = answer;
          return {
            ...answer,
            questions
          };
        })
      };
    })
  };
};
