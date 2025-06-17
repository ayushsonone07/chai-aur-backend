// swagger.js
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Chai aur Backend',
      version: '1.0.0',
      description: 'API documentation for Chai aur Backend for this project',
    },
    servers: [
      {
        url: '5000-firebase-chai-aur-backend-1749058382207.cluster-sumfw3zmzzhzkx4mpvz3ogth4y.cloudworkstations.dev',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Adjust this path based on your project
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };

