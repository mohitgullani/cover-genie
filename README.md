# CoverGenie

CoverGenie is a web application designed to generate professional cover letters tailored to specific job descriptions. Utilizing cutting-edge technology, CoverGenie enhances job application efficiency by producing personalized cover letters quickly and effectively.

## Features
- **AI-Powered Cover Letters:** Generates customized cover letters based on job descriptions.
- **User-Friendly Interface:** Intuitive and responsive UI built with React and TailwindCSS.
- **Efficient Processing:** Backend services built with Spring Boot and RESTful APIs ensure fast and reliable operations.
- **Seamless Integration:** Easily integrates with various job portals and application systems.

## Technologies Used
- **Frontend:** React, TailwindCSS
- **Backend:** Spring Boot
- **APIs:** RESTful API, OpenAI API

## Installation
### Prerequisites
- Node.js and npm
- Java Development Kit (JDK)
- Maven
- OpenAI API Key

### Frontend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/CoverGenie.git
   cd CoverGenie/covergenie-frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the React application:
   ```sh
   npm start
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd ../covergenie
   ```

2. Configure the `application.properties` file with your OpenAI API key:
   ```properties
   openai.api.key=your_openai_api_key
   ```

3. Build and run the Spring Boot application:
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Enter the job description and your details.
3. Click the "Generate Cover Letter" button.
4. Review and copy your personalized cover letter.

## API Endpoints
### Generate Cover Letter
- **URL:** `/api/v1/coverletter`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "resume": "string",
    "jd": "string"
  }
  ```
- **Response:**
  ```json
  {
    "coverLetter": "string"
  }
  ```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.
