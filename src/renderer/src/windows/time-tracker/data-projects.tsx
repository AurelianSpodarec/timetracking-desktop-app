
interface IProject {
  name: string
  slug: string
  tasks: ITask[]
}

interface ITask {
  name: string
  slug: string
  timeLogged: ITaskTime[]
}

interface ITaskTime {
  fromDateTime: string // ISO string
  toDateTime: string // ISO string
}

const dataProjects: IProject[] = [
  {
    name: "Tailbuiler",
    slug: "tailbuilder",
    tasks: [
      {
        name: 'Programming',
        slug: "programming",
        timeLogged: [
          { fromDateTime: '2024-06-16T14:30:00Z', toDateTime: '2024-06-16T16:30:00Z' },
          { fromDateTime: '2024-06-15T10:00:00Z', toDateTime: '2024-06-15T12:00:00Z' },
          { fromDateTime: '2024-06-14T08:00:00Z', toDateTime: '2024-06-14T10:00:00Z' },
          { fromDateTime: '2024-06-13T14:00:00Z', toDateTime: '2024-06-13T15:30:00Z' },
          { fromDateTime: '2024-06-12T13:00:00Z', toDateTime: '2024-06-12T14:45:00Z' },
          { fromDateTime: '2024-06-11T09:00:00Z', toDateTime: '2024-06-11T10:15:00Z' },
          { fromDateTime: '2024-06-10T11:00:00Z', toDateTime: '2024-06-10T13:00:00Z' },
          { fromDateTime: '2024-06-09T16:00:00Z', toDateTime: '2024-06-09T18:30:00Z' },
          { fromDateTime: '2024-06-08T08:30:00Z', toDateTime: '2024-06-08T09:45:00Z' },
          { fromDateTime: '2024-06-07T14:15:00Z', toDateTime: '2024-06-07T15:45:00Z' },
          { fromDateTime: '2024-06-06T10:30:00Z', toDateTime: '2024-06-06T12:00:00Z' },
          { fromDateTime: '2024-06-05T15:45:00Z', toDateTime: '2024-06-05T17:00:00Z' },
          { fromDateTime: '2024-06-04T11:00:00Z', toDateTime: '2024-06-04T12:30:00Z' },
          { fromDateTime: '2024-06-03T08:00:00Z', toDateTime: '2024-06-03T09:15:00Z' },
          { fromDateTime: '2024-06-02T13:30:00Z', toDateTime: '2024-06-02T15:00:00Z' },
          { fromDateTime: '2024-06-01T09:15:00Z', toDateTime: '2024-06-01T10:45:00Z' },
          { fromDateTime: '2024-05-31T12:00:00Z', toDateTime: '2024-05-31T13:30:00Z' },
          { fromDateTime: '2024-05-30T07:00:00Z', toDateTime: '2024-05-30T08:30:00Z' },
          { fromDateTime: '2024-05-29T15:00:00Z', toDateTime: '2024-05-29T17:00:00Z' },
          { fromDateTime: '2024-05-28T14:00:00Z', toDateTime: '2024-05-28T15:30:00Z' }
        ]
      },
      {
        name: "Design",
        slug: "design",
        timeLogged: [
          { fromDateTime: '2024-06-16T09:00:00Z', toDateTime: '2024-06-16T11:00:00Z' },
          { fromDateTime: '2024-06-15T13:00:00Z', toDateTime: '2024-06-15T14:30:00Z' },
          { fromDateTime: '2024-06-14T11:00:00Z', toDateTime: '2024-06-14T12:30:00Z' },
          { fromDateTime: '2024-06-13T10:00:00Z', toDateTime: '2024-06-13T12:00:00Z' },
          { fromDateTime: '2024-06-12T09:00:00Z', toDateTime: '2024-06-12T11:00:00Z' },
          { fromDateTime: '2024-06-11T13:00:00Z', toDateTime: '2024-06-11T14:30:00Z' },
          { fromDateTime: '2024-06-10T08:00:00Z', toDateTime: '2024-06-10T10:30:00Z' },
          { fromDateTime: '2024-06-09T12:00:00Z', toDateTime: '2024-06-09T14:00:00Z' },
          { fromDateTime: '2024-06-08T10:00:00Z', toDateTime: '2024-06-08T12:00:00Z' },
          { fromDateTime: '2024-06-07T08:00:00Z', toDateTime: '2024-06-07T10:00:00Z' },
          { fromDateTime: '2024-06-06T14:00:00Z', toDateTime: '2024-06-06T15:30:00Z' },
          { fromDateTime: '2024-06-05T08:00:00Z', toDateTime: '2024-06-05T10:00:00Z' },
          { fromDateTime: '2024-06-04T13:00:00Z', toDateTime: '2024-06-04T14:30:00Z' },
          { fromDateTime: '2024-06-03T10:00:00Z', toDateTime: '2024-06-03T12:00:00Z' },
          { fromDateTime: '2024-06-02T08:00:00Z', toDateTime: '2024-06-02T10:00:00Z' },
          { fromDateTime: '2024-06-01T11:00:00Z', toDateTime: '2024-06-01T12:30:00Z' },
          { fromDateTime: '2024-05-31T14:00:00Z', toDateTime: '2024-05-31T16:00:00Z' }
        ]
      }
    ]
  },
  {
    name: "House",
    slug: "house",
    tasks: [
      {
        name: "Gardening",
        slug: "gardening",
        timeLogged: [
          { fromDateTime: '2024-06-16T10:30:00Z', toDateTime: '2024-06-16T11:30:00Z' },
          { fromDateTime: '2024-06-15T12:30:00Z', toDateTime: '2024-06-15T13:30:00Z' },
          { fromDateTime: '2024-06-14T10:30:00Z', toDateTime: '2024-06-14T11:30:00Z' },
          { fromDateTime: '2024-06-13T10:30:00Z', toDateTime: '2024-06-13T11:30:00Z' },
          { fromDateTime: '2024-06-12T10:30:00Z', toDateTime: '2024-06-12T11:30:00Z' },
          { fromDateTime: '2024-06-11T10:30:00Z', toDateTime: '2024-06-11T11:30:00Z' },
          { fromDateTime: '2024-06-10T10:30:00Z', toDateTime: '2024-06-10T11:30:00Z' },
          { fromDateTime: '2024-06-09T10:30:00Z', toDateTime: '2024-06-09T11:30:00Z' },
          { fromDateTime: '2024-06-08T10:30:00Z', toDateTime: '2024-06-08T11:30:00Z' },
          { fromDateTime: '2024-06-07T10:30:00Z', toDateTime: '2024-06-07T11:30:00Z' }
        ]
      },
      {
        name: "Repairs",
        slug: "repairs",
        timeLogged: [
          { fromDateTime: '2024-06-16T14:30:00Z', toDateTime: '2024-06-16T15:30:00Z' },
          { fromDateTime: '2024-06-15T16:30:00Z', toDateTime: '2024-06-15T17:30:00Z' },
          { fromDateTime: '2024-06-14T14:30:00Z', toDateTime: '2024-06-14T15:30:00Z' },
          { fromDateTime: '2024-06-13T14:30:00Z', toDateTime: '2024-06-13T15:30:00Z' },
          { fromDateTime: '2024-06-12T14:30:00Z', toDateTime: '2024-06-12T15:30:00Z' },
          { fromDateTime: '2024-06-11T14:30:00Z', toDateTime: '2024-06-11T15:30:00Z' },
          { fromDateTime: '2024-06-10T14:30:00Z', toDateTime: '2024-06-10T15:30:00Z' },
          { fromDateTime: '2024-06-09T14:30:00Z', toDateTime: '2024-06-09T15:30:00Z' },
          { fromDateTime: '2024-06-08T14:30:00Z', toDateTime: '2024-06-08T15:30:00Z' },
          { fromDateTime: '2024-06-07T14:30:00Z', toDateTime: '2024-06-07T15:30:00Z' }
        ]
      },
      {
        name: "Wall Painting",
        slug: "wall-painting",
        timeLogged: [
          { fromDateTime: '2024-06-16T13:00:00Z', toDateTime: '2024-06-16T14:00:00Z' },
          { fromDateTime: '2024-06-15T15:00:00Z', toDateTime: '2024-06-15T16:00:00Z' },
          { fromDateTime: '2024-06-14T13:00:00Z', toDateTime: '2024-06-14T14:00:00Z' },
          { fromDateTime: '2024-06-13T13:00:00Z', toDateTime: '2024-06-13T14:00:00Z' },
        ]
      },
    ]
  },
  {
    name: "Sport",
    slug: "sport",
    tasks: [
      {
        name: "Basketball",
        slug: "basketball",
        timeLogged: [
          { fromDateTime: '2024-06-16T06:00:00Z', toDateTime: '2024-06-16T07:00:00Z' },
          { fromDateTime: '2024-06-15T08:00:00Z', toDateTime: '2024-06-15T09:00:00Z' },
          { fromDateTime: '2024-06-14T06:00:00Z', toDateTime: '2024-06-14T07:00:00Z' },
          { fromDateTime: '2024-06-13T06:00:00Z', toDateTime: '2024-06-13T07:00:00Z' },
          { fromDateTime: '2024-06-12T06:00:00Z', toDateTime: '2024-06-12T07:00:00Z' },
          { fromDateTime: '2024-06-11T06:00:00Z', toDateTime: '2024-06-11T07:00:00Z' },
          { fromDateTime: '2024-06-10T06:00:00Z', toDateTime: '2024-06-10T07:00:00Z' },
          { fromDateTime: '2024-06-09T06:00:00Z', toDateTime: '2024-06-09T07:00:00Z' },
          { fromDateTime: '2024-06-08T06:00:00Z', toDateTime: '2024-06-08T07:00:00Z' },
          { fromDateTime: '2024-06-07T06:00:00Z', toDateTime: '2024-06-07T07:00:00Z' }
        ]
      },
      {
        name: "Swimming",
        slug: "swimming",
        timeLogged: [
          { fromDateTime: '2024-06-16T07:30:00Z', toDateTime: '2024-06-16T08:30:00Z' },
          { fromDateTime: '2024-06-15T09:30:00Z', toDateTime: '2024-06-15T10:30:00Z' },
          { fromDateTime: '2024-06-14T07:30:00Z', toDateTime: '2024-06-14T08:30:00Z' },
          { fromDateTime: '2024-06-13T07:30:00Z', toDateTime: '2024-06-13T08:30:00Z' },
          { fromDateTime: '2024-06-12T07:30:00Z', toDateTime: '2024-06-12T08:30:00Z' },
          { fromDateTime: '2024-06-11T07:30:00Z', toDateTime: '2024-06-11T08:30:00Z' },
          { fromDateTime: '2024-06-10T07:30:00Z', toDateTime: '2024-06-10T08:30:00Z' },
          { fromDateTime: '2024-06-09T07:30:00Z', toDateTime: '2024-06-09T08:30:00Z' },
          { fromDateTime: '2024-06-08T07:30:00Z', toDateTime: '2024-06-08T08:30:00Z' },
          { fromDateTime: '2024-06-07T07:30:00Z', toDateTime: '2024-06-07T08:30:00Z' }
        ]
      },
      {
        name: "Kickboxing",
        slug: "kickboxing",
        timeLogged: [
          { fromDateTime: '2024-06-16T09:00:00Z', toDateTime: '2024-06-16T10:00:00Z' },
          { fromDateTime: '2024-06-15T11:00:00Z', toDateTime: '2024-06-15T12:00:00Z' },
          { fromDateTime: '2024-06-14T09:00:00Z', toDateTime: '2024-06-14T10:00:00Z' },
          { fromDateTime: '2024-06-13T09:00:00Z', toDateTime: '2024-06-13T10:00:00Z' },
          { fromDateTime: '2024-06-12T09:00:00Z', toDateTime: '2024-06-12T10:00:00Z' },
          { fromDateTime: '2024-06-11T09:00:00Z', toDateTime: '2024-06-11T10:00:00Z' },
          { fromDateTime: '2024-06-10T09:00:00Z', toDateTime: '2024-06-10T10:00:00Z' },
          { fromDateTime: '2024-06-09T09:00:00Z', toDateTime: '2024-06-09T10:00:00Z' },
          { fromDateTime: '2024-06-08T09:00:00Z', toDateTime: '2024-06-08T10:00:00Z' },
          { fromDateTime: '2024-06-07T09:00:00Z', toDateTime: '2024-06-07T10:00:00Z' }
        ]
      },
    ]
  }
]

export default dataProjects
