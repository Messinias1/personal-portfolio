import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const postURL = `${process.env.REACT_APP_MAILCHIMP_URL} ?u = ${process.env.REACT_APP_MAILCHIMP_U} &id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <Newsletter>
      <MailchimpSubscribe>
        url={postURL}
        render=
        {({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          ></Newsletter>
        )}
      </MailchimpSubscribe>
    </Newsletter>
  );
};
