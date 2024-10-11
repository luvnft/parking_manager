"use client"

import React from "react";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'


export const RegistrationPage = () => {

  const supabase = createClientComponentClient()

  return (
    <div className="relative">
      <img
        src="/images/background2.jpeg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Our Platform.
              </h2>
              <p className="max-w-xl mb-4 text-base text-black-900 md:text-lg">
                Our platform offers advanced booking options, special zones, and additional services to choose the option that best fits your needs.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="rounded shadow-2xl bg-gradient-to-br from-gray-900 to-gray-700 p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  User
                </h3>

                <Auth
                  supabaseClient={supabase}
                  view="sign_in"
                  appearance={{ theme: ThemeSupa }}
                  theme="dark"
                  showLinks={true}
                  providers={['google']}
                  redirectTo="http://localhost:3000/"
                  localization={{
                    variables: {
                      sign_up: {
                        email_label: "Email Address",
                        password_label: "Password",
                        email_input_placeholder: "Email Address",
                        password_input_placeholder: "Password",
                        button_label: "Register",
                        loading_button_label: "Registering ...",
                        social_provider_text: "Sign in with {{provider}}",
                        link_text: "Don't have an account? Register",
                        confirmation_text: "Check your email for the confirmation link"
                      },
                      sign_in: {
                        email_label: "Email Address",
                        password_label: "Password",
                        email_input_placeholder: "Email Address",
                        password_input_placeholder: "Password",
                        button_label: "Log In",
                        loading_button_label: "Logging In ...",
                        social_provider_text: "Sign in with {{provider}}",
                        link_text: "Already have an account? Log in"
                      },
                      forgotten_password: {
                        email_label: "Email Address",
                        password_label: "Password",
                        email_input_placeholder: "Email Address",
                        button_label: "Send Password Reset Instructions",
                        loading_button_label: "Sending reset instructions ...",
                        link_text: "Forgot your password?",
                        confirmation_text: "Check your email for the password reset link"
                      }
                    },
                  }}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
