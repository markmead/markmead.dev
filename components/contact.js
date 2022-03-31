import { useState } from 'react'

import { Octokit } from 'octokit'
import GhContactForm from 'gh-contact-form'

const Contact = () => {
  let [title, setTitle] = useState('')
  let [email, setEmail] = useState('')
  let [body, setBody] = useState('')
  let [sent, setSent] = useState(false)
  let [error, setError] = useState(false)

  const contactForm = new GhContactForm(
    new Octokit({
      auth: process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN
    })
  )

  async function createGitHubIssue() {
    const issueBody = `Email: ${email}\nMessage:\n${body}`

    const formResponse = await contactForm.sendMessage({
      owner: 'markmead',
      repo: 'site-contact-form',
      title,
      body: issueBody
    })

    const { status } = formResponse

    setSent(status === 201)
    setError(status === 422)

    if (status === 201) {
      setTitle('')
      setEmail('')
      setBody('')
    }
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault()
        createGitHubIssue()
      }}
    >
      <div>
        <label className="sr-only" htmlFor="title">
          Title
        </label>

        <input
          className="w-full p-3 mt-1 bg-transparent border-2 border-gray-100 rounded-lg dark:border-gray-700"
          placeholder="Title"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label className="sr-only" htmlFor="email">
          Email
        </label>

        <input
          className="w-full p-3 mt-1 bg-transparent border-2 border-gray-100 rounded-lg dark:border-gray-700"
          placeholder="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="sr-only" htmlFor="message">
          Message
        </label>

        <textarea
          className="w-full p-3 mt-1 align-middle bg-transparent border-2 border-gray-100 rounded-lg dark:border-gray-700"
          placeholder="Message"
          id="message"
          rows="4"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>

      {sent && (
        <div className="flex items-center gap-4 text-white" role="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>

          <strong className="text-sm font-normal">
            {' '}
            Message has been sent!{' '}
          </strong>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-4 text-white" role="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
            />
          </svg>

          <strong className="text-sm font-normal">
            Message could not be sent!
          </strong>
        </div>
      )}

      <button
        className="w-full p-3 font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
        type="submit"
      >
        Send Message
      </button>
    </form>
  )
}

export default Contact
