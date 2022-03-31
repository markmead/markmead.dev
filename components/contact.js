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
      auth: process.env.GITHUB_ACCESS_TOKEN
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
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault()
        createGitHubIssue()
      }}
    >
      {sent && (
        <div
          className="p-4 text-sm font-medium text-center text-white bg-green-900 rounded-lg"
          role="alert"
        >
          Form Sent
        </div>
      )}

      {error && (
        <div
          className="p-4 text-sm font-medium text-center text-white bg-red-900 rounded-lg"
          role="alert"
        >
          Form Error
        </div>
      )}

      <div>
        <label className="sr-only" htmlFor="title">
          Title
        </label>

        <input
          className="w-full p-3 mt-1 bg-transparent border-white rounded-lg"
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
          className="w-full p-3 mt-1 bg-transparent border-white rounded-lg"
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
          className="w-full p-3 mt-1 bg-transparent border-white rounded-lg"
          placeholder="Message"
          id="message"
          rows="4"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>

      <button
        className="w-full p-3 font-medium text-white bg-green-700 rounded-lg hover:bg-green-800"
        type="submit"
      >
        Send Message
      </button>
    </form>
  )
}

export default Contact
