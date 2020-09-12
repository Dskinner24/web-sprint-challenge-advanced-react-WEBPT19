import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)
    const Header = getByText(/Checkout Form/i)
    expect(Header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByTestId } = render(<CheckoutForm />);

    const submitButton = getByTestId('successButton');

    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);

    const success = getByTestId('successMessage');

    expect(success).toBeInTheDocument();
});
