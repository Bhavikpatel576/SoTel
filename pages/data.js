import React, { Component } from 'react'
import Router from 'next/router'

import Page from '../components/page'
import Link from '../components/link'
import Input from '../components/input'
import Select from '../components/select'
import TagPicker from '../components/tagPicker'
import Checkbox from '../components/checkbox'

// import createTodo from '../lib/create-todo'
import createData from '../lib/create-data'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      priority: 1,
      tags: [],
      done: false,
      status:'connecting',
      timestamp: '',
      device_type: '',
      mac_addr:'',
      rssi: 0,
      data_rate: '',
      gps:'',
      bandwidth:'',
    }
  }

  handleInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ [target.name]: value })
    console.log(value)
    console.log(target.name)
  }

  handleDataClick = async () => {
    const { title } = this.state

    if (title === '') {
      alert("Title can't be blank")
      return
    }

    try {
      await createData({ ...this.state, createdAt: new Date().toISOString() })
      Router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { title, description, tags, done } = this.state
    return (
      <Page heading="Display Data">
        <div className="wrap">
          <Input
            placeholder="Title"
            value={title}
            onChange={this.handleInputChange}
            name = 'title'
            margin="0 0 40px 0"
          />
          <Input
            placeholder="Description of data will be here"
            value={description}
            onChange={this.handleInputChange}
            name="description"
            margin="0 0 90px 0"
          />
          <div className="bottom">
            <div>
              <Link href="/" inverted margin="0 30px 0 0">
                Cancel
              </Link>
              <Link type="button" onClick={this.handleDataClick}>
                Show Data
              </Link>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .wrap {
              margin-top: 40px;
              margin-left: 60px;
              margin-right: 130px;
            }
            .column {
              display: flex;
              align-items: center;
            }
            .bottom {
              margin-top: 60px;
              padding: 60px 0;
              border-top: 1px solid #EEEBF3;
              display: flex;
              justify-content: space-between;
            }
            .completed {
              display: flex;
              align-items: flex-start;
              padding-top: 15px;
            }
            .completed span {
              font-size: 1.8rem;
              margin-right: 10px;
            }
          `}
        </style>
      </Page>
    )
  }
}
