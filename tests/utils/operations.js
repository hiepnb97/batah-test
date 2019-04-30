import { gql } from 'apollo-boost';

export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      id
      email
      firstName
      lastName
      avatar
      userType
      identity
      role
      bookmarks
      phone
      address
      paypal
    }
  }
`;

/** Users Mutations */

export const REQ_RESETPASSWORD = gql`
  mutation($email: String!) {
    reqResetPassword(email: $email)
  }
`;

export const LOGIN_GOOGLE = gql`
  mutation($token: String!) {
    loginGoogle(token: $token) {
      token
      user {
        id
        email
        firstName
        lastName
        avatar
        userType
        identity
        role
        bookmarks
        phone
        address
        paypal
      }
    }
  }
`;
export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        firstName
        lastName
        userType
        avatar
        identity
        role
        bookmarks
        phone
        address
        paypal
      }
    }
  }
`;
export const SIGNUP_USER = gql`
  mutation(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    signup(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
      user {
        email
        firstName
        lastName
        userType
        avatar
        identity
        role
      }
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation(
    $email: String!
    $firstName: String!
    $lastName: String!
    $phone: String!
    $avatar: String!
    $address: String!
  ) {
    updateProfile(
      email: $email
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      avatar: $avatar
      address: $address
    ) {
      email
      firstName
      lastName
      phone
      identity
      avatar
      address
    }
  }
`;

export const UPDATE_IDENTITY = gql`
  mutation($email: String!) {
    reqResetPassword(email: $email)
  }
`;

export const CREATE_BOOKING = gql`
    mutation($email: String!) {
    reqResetPassword(email: $email)
  }
`;

export const CREATE_BOOK_SCHEDULE = gql`
  mutation($email: String) {
    reqResetPassword(email: $email)
  }
`;

export const CREATE_PAYMENT = gql`
  mutation($email: String) {
    reqResetPassword(email: $email)
  }
`;

export const CREATE_PAYMENT_ACCOUNT = gql`
  mutation($email: String) {
    reqResetPassword(email: $email)
  }
`;

export const CREATE_PAYPAL_INFORMATION = gql`
  mutation($email: String) {
    reqResetPassword(email: $email)
  }
`;

export const CREATE_CREDITCARD_INFORMATION = gql`
  mutation($email: String) {
    reqResetPassword(email: $email)
  }
`;

export const SEND_ADMIN = gql`
  mutation($email: String) {
    reqResetPassword(email: $email)
  }
`;

export const CREATE_REVENUE = gql`
  mutation($email: String) {
    reqResetPassword(email: $email)
  }
`;

export const BOOKMARK_OFFICE = gql`
  mutation($office: ID!) {
    bookmarkOffice(office: $office)
  }
`;

export const UNBOOKMARK_OFFICE = gql`
  mutation($office: ID!) {
    unBookmarkOffice(office: $office)
  }
`;

export const GET_OFFICES = gql`
  query {
    getOffices {
      offices {
        id
        title
        address
        description
        pictures
        status
        reviews {
          createdAt
          text
          stars
        }
        size
      }
      booking {
        id
        createdAt
        bookee {
          firstName
          lastName
          avatar
        }
        bookedSchedules {
          date
          slots
        }
        payment {
          totalPrice
        }
        office {
          title
        }
      }
    }
  }
`;

export const GET_OFFICEBYSTATUS = gql`
  query {
    getOfficeByStatus {
      active {
        id
        title
        address
        description
        pictures
        status
        host {
          id
          firstName
          lastName
        }
      }
      pending {
        id
        title
        address
        description
        pictures
        status
        host {
          id
          firstName
          lastName
        }
      }
      deactive {
        id
        title
        address
        description
        pictures
        status
        host {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

export const CAN_REVIEW = gql`
  query($office: ID!) {
    canReview(office: $office)
  }
`;

export const GET_OFFICE = gql`
  query($id: String!) {
    getOffice(id: $id) {
      id
      category
      title
      address
      amenities
      description
      shortDescription
      pictures
      phone
      website
      email
      numSeats
      tags
      status
      pricing {
        basePrice
      }
      location {
        lat
        lng
        address
      }
      officeRules {
        smokingAllowed
        partiesAndEventsAllowed
        additionalRules
      }
      reviews {
        createdAt
        text
        stars
        pictures
        user {
          firstName
          lastName
          avatar
        }
      }
      host {
        id
        avatar
        firstName
        lastName
        email
        phone
      }
      size
    }
  }
`;
export const GET_DASHBOARD = gql`
  query {
    getDashboard {
      activeOffices
      totalViews
      totalBooking
      totalReviews
      notifies {
        id
        createdAt
        type
        message
        office {
          id
        }
      }
    }
  }
`;
export const GET_TOPOFFICE = gql`
  query {
    topBookingOffice {
      id
      title
      address
      pictures
      status
      reviews {
        stars
      }
    }
  }
`;

export const APPROVE_OFFICE = gql`
  mutation($office: ID!) {
    approveOffice(office: $office) {
      id
      title
      address
      description
      pictures
      status
    }
  }
`;

export const REJECT_OFFICE = gql`
  mutation($office: ID!) {
    rejectOffice(office: $office) {
      id
      title
      address
      description
      pictures
      status
    }
  }
`;

export const CREATE_REVIEW = gql`
   mutation($email: String) {
    reqResetPassword(email: $email)
  }
`;

export const SEARCH_TITLE = gql`
  query($searchTerm: String!) {
    searchTitle(searchTerm: $searchTerm) {
      title
    }
  }
`;

export const SEARCH_OFFICE = gql`
  query($searchTerm: String, $area: AreaInput, $category: String!) {
    searchOffice(
      searchTerm: $searchTerm
      area: $area
      category: $category
    ) {
      id
    title
    address
    category
    }
  }
`;

export const SEARCH_OFFICE_BY_FILTER = gql`
  query($id: [ID!]!, $minNumSeats: Int, $maxNumSeats: Int, $amenities: [String!]) {
    searchOfficeByFilter(
      id: $id
      minNumSeats: $minNumSeats
      maxNumSeats: $maxNumSeats
      amenities: $amenities
    ) {
      id
      title
      address
      category
      numSeats
    }
  }
`;

export const GET_BOOKMARKS = gql`
  query {
    getBookmarks {
      id
      title
      address
      reviews {
        id
        stars
      }
      pictures
    }
  }
`;

export const GET_VISITORSREVIEW = gql`
  query {
    getVisitorReviews {
      createdAt
      text
      stars
      pictures
      office {
        title
        id
      }
      user {
        firstName
        lastName
        id
        avatar
      }
    }
  }
`;
export const GET_USERREVIEW = gql`
  query {
    getUserReviews {
      id
      createdAt
      text
      stars
      pictures
      office {
        id
        title
      }
    }
  }
`;

export const GET_REVENUE = gql`
  query {
    getRevenue {
      bookings {
        id
        createdAt
        office {
          title
        }
        payment {
          totalPrice
        }
      }
      revenue {
        total
        withdrawable
      }
      payoutHistories {
        id
        createdAt
        money
        status
      }
    }
  }
`;

export const GET_AVAILABLESCHEDULE = gql`
  query($office: ID!) {
    getAvailableSchedule(office: $office) {
      id
      office
      date
      slots
    }
  }
`;

export const GET_BOOKEDSCHEDULE = gql`
  query($office: ID!) {
    getBookedSchedule(office: $office) {
      id
      office
      date
      slots
    }
  }
`;

export const GET_MESSAGES = gql`
  query {
    getMessages {
      id
      read
      createdAt
      withPerson {
        firstName
        lastName
        avatar
        id
      }
      messages {
        id
        createdAt
        from {
          id
          firstName
          lastName
          avatar
        }
        readAt
        content
      }
    }
  }
`;

export const GET_NUMOFFICE = gql`
  query {
    getNumOffice
  }
`;

export const GET_INVOICE = gql`
  query($bookingId: String!) {
    getInvoice(bookingId: $bookingId) {
      id
      firstName
      lastName
      createdAt
      email
      phone
      bookedSchedules {
        slots
        id
        date
      }
      payment {
        totalPrice
      }
      office {
        address
        title
        host {
          firstName
          lastName
          email
          phone
        }
      }
    }
  }
`;

export const GET_BOOKING = gql`
  query {
    getBookingByGuest {
      id
      office {
        id
        title
        pictures
        address
        status
        host {
          id
          firstName
          lastName
          email
          phone
        }
      }
      createdAt
      bookedSchedules {
        id
        date
        slots
      }
      payment {
        totalPrice
      }
    }
  }
`;
export const CREATE_MESSAGE = gql`
  mutation($to: ID!, $content: String!) {
    createMessage(to: $to, content: $content) {
      id
      content
      createdAt
    }
  }
`;

export const UPDATE_MESSAGE = gql`
  mutation($id: ID!) {
    updateMessage(id: $id) {
      id
      readAt
    }
  }
`;

export const SET_PASSWORD = gql`
  mutation($email: String!) {
    reqResetPassword(email: $email)
  }
`;

export const CREATE_VIEW = gql`
  mutation($email: String) {
    reqResetPassword(email: $email)
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation(
    $currentPassword: String!
    $password: String!
    $confirmPassword: String!
  ) {
    changePassword(
      currentPassword: $currentPassword
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      email
      firstName
      lastName
      avatar
      userType
      identity
      role
      bookmarks
    }
  }
`;
export const WITHDRAW_REVENUE = gql`
  mutation {
    withdrawRevenue {
      revenue {
        total
        withdrawable
      }
      payout {
        id
        createdAt
        money
        status
      }
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation($email: String!) {
    reqResetPassword(email: $email)
  }
`;





/** Host manipulate */
export const CREATE_LIST = gql`
  mutation(
    $title: String!
    $address: String!
    $amenities: [String!]!
    $category: String!
    $city: String!
    $description: String!
    $email: String
    $location: LocationInput!
    $numSeats: Int!
    $officeRules: RuleInput!
    $phone: String!
    $pictures: [String!]!
    $pricing: PriceInput!
    $schedule: [AvailableDays!]!
    $shortDescription: String!
    $website: String
    $tags: [String!]!
    $size: Int!
  ) {
    createList(
      title: $title
      address: $address
      amenities: $amenities
      category: $category
      city: $city
      description: $description
      email: $email
      location: $location
      numSeats: $numSeats
      officeRules: $officeRules
      phone: $phone
      pictures: $pictures
      pricing: $pricing
      schedule: $schedule
      shortDescription: $shortDescription
      website: $website
      tags: $tags
      size: $size
    ) {
      title
      category
      description
    }
  }
`;

export const UPDATE_OFFICE = gql`
  mutation(
    $title: String!
    $officeId: String!
    $address: String!
    $amenities: [String!]!
    $category: String!
    $city: String!
    $description: String!
    $email: String
    $location: LocationInput!
    $numSeats: Int!
    $officeRules: RuleInput!
    $phone: String!
    $pricing: PriceInput!
    $shortDescription: String!
    $website: String
    $tags: [String!]!
    $size: Int!
  ) {
    updateOffice(
      officeId: $officeId
      address: $address
      amenities: $amenities
      category: $category
      city: $city
      description: $description
      email: $email
      location: $location
      numSeats: $numSeats
      officeRules: $officeRules
      phone: $phone
      pricing: $pricing
      shortDescription: $shortDescription
      size: $size
      website: $website
      title: $title
      tags: $tags
    ) {
      id
      category
      title
    }
  }
`;
export const UPDATE_OFFICEIMAGE = gql`
  mutation($officeId: String!, $pictures: [String!]!) {
    updateOfficeImages(officeId: $officeId, pictures: $pictures) {
      id
      pictures
    }
  }
`;
export const UPDATE_OFFICESCHEDULE = gql`
  mutation($officeId: String!, $schedule: [AvailableDays!]!) {
    updateOfficeSchedule(officeId: $officeId, schedule: $schedule)
  }
`;

/** Host manipulate */
/** Admin */
export const ADMIN_REVENUE = gql`
  query {
    getAdminRevenue {
      revenue {
        host {
          firstName
          lastName
          id
          avatar
        }
        total
        withdrawable
      }
      total
      balance
      bookings
      payouts {
        id
        createdAt
        host {
          firstName
          lastName
          id
          avatar
        }
        money
        status
      }
    }
  }
`;

export const ACCEPT_PAYOUTPENDING = gql`
  mutation($payoutId: ID!) {
    acceptPayoutPending(payoutId: $payoutId) {
      id
      status
      money
      createdAt
    }
  }
`;
