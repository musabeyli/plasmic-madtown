import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Select from "../components/Select"; // plasmic-import: eL6LYOdI6RC/component
import Select__Option from "../components/Select__Option"; // plasmic-import: ioSFR3lRmqr/component
import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: wA73ZswqroE6r1m1xaxGJ1/projectcss
import sty from "./PlasmicPrdct.module.css"; // plasmic-import: ctEGS_j_Qt/css
import { classNames } from "@plasmicapp/react-web";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");
export default function CheckoutButton() {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <form action="/api/checkout_sessions?quantity=3" method="POST">
      <section>
        <div className={classNames(projectcss.all, sty.freeBox__gvTr)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__lCR5
            )}
          >
            {"Quantity:"}
          </div>

          <Select
            data-plasmic-name={"select"}
            className={classNames("__wab_instance", sty.select)}
            defaultValue={"value1" as const}
            onChange={handleChange}
          >
            <Select__Option
              className={classNames("__wab_instance", sty.option__hoiXq)}
              value={"1" as const}
            >
              {"1"}
            </Select__Option>

            <Select__Option
              className={classNames("__wab_instance", sty.option__iuXtT)}
              value={"2" as const}
            >
              {"2"}
            </Select__Option>

            <Select__Option
              className={classNames("__wab_instance", sty.option__q6Qru)}
              value={"3" as const}
            >
              {"3"}
            </Select__Option>

            <Select__Option
              className={classNames("__wab_instance", sty.option___0ZIi9)}
              value={"4" as const}
            >
              {"4"}
            </Select__Option>

            <Select__Option
              className={classNames("__wab_instance", sty.option__ivQkk)}
              value={"5" as const}
            >
              {"5"}
            </Select__Option>
          </Select>
          {/* <CheckoutButton selectedValue={selectedValue} /> */}
        </div>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            margin-top: 24px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
}
