import React from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";

import { screen, render, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmailGuesser from "../EmailGuesser";

const mockedAxios = axios;
const setup = () => {
  render(
    <>
      <ToastContainer />
      <EmailGuesser />
    </>
  );
};

describe("EmailGuesserFrom Component", () => {
  afterEach(cleanup);

  it("Test: Email Guesser Form heading 1", () => {
    setup();
    const fromHeading1 = screen.getByRole("heading", {
      name: /email guesser/i,
    });
    expect(fromHeading1).toBeInTheDocument();
  });

  it("Test: Email Guesser Form heading 2", () => {
    setup();
    const fromHeading2 = screen.getByText(/babbel/i);
    expect(fromHeading2).toBeInTheDocument();
  });

  it("Test: The presence of Email Submit Button", () => {
    setup();
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });

  it("Test: When we submit the for with valid params it return us email", async () => {
    setup();

    mockedAxios.get.mockImplementation((requestUrl) => {
      if (requestUrl === "/api/generate") {
        return Promise.resolve({
          data: "razahasnat@google.com",
        });
      }

      return Promise.reject();
    });

    const submitButton = screen.getByRole("button", { name: "Submit" });
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    expect(screen.getByText("Guessed Email")).toBeInTheDocument();
  });

  it("Test: When we submit the form with invalid domain field it will return us error message", async () => {
    setup();

    mockedAxios.get.mockImplementation((requestUrl) => {
      if (requestUrl === "/api/generate") {
        return Promise.reject({
          response: {
            data: "Unable to derive email, Please provide a valid domain",
          },
        });
      }
    });

    const submitButton = screen.getByRole("button", { name: "Submit" });
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    expect(
      screen.getByText("Unable to derive email, Please provide a valid domain")
    ).toBeInTheDocument();
  });
});
