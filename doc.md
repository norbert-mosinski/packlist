**TODO** 
- move it into corresponding place

# Example React Project Architecture

This is an example project to demonstrate the recommended architecture for middle to large-sized projects in React. While this architecture is based on Next.js, it can easily be adapted to pure React or React Native. The main differences will be explained.

**Follow app/packlist/create/page.tsx for further comments which explain further this documentation**s

## Setup

- **Typescript** for type safety.
- **ESLint** with a formatter to ensure consistent code style.
- **Custom scripts** with explanations for easier project management.
- **TODO**: Consider Docker setup for containerization.

## Libraries Used

- **React Hook Form** with **Zod** for form validation. This combination is easy to use and effective for handling forms.
- **TailwindCSS** for styling, offering utility-first CSS classes.
- **TanStack Query** (formerly React Query) for handling asynchronous data fetching in React and React Native. It supports offline functionality, reactivity, and flexibility.
- **Mitt** as an event bus. It works both in the browser and server-side, offering a simple and minimal event communication solution.
- **Zustand** for global state management. It’s a simple and efficient state management solution.

## Code Style

- **File names**: Always in `kebab-case`.
- **Classes, components, enums**: Always in `PascalCase`.
- **Other identifiers**: Always in `camelCase`.
- **Avoid**: `any` and `ts-ignore`.
- **Exports**: Always use **named exports** instead of default exports for better consistency and maintainability.

## Layers of the Architecture

### Data Layer
- Handles data access, API calls, and repositories.
- Offers validation on the data level (e.g., ensuring age is a number).

### Application Layer
- Contains business logic and defines the core of the app.
- Communicates with the data layer and provides context to the data.
- Maps data entities to application-specific entities.
- Offers validation on the application level (e.g., ensuring age is a number between 0 and 18).

### Presentation Layer
- Focuses purely on presentation (UI).
- Communicates with the application layer, mapping application data to presentation entities.
- Knows the validation rules defined by the application layer.
  
### Infrastructure Layer
- Contains components responsible for app functionality without business logic (e.g., database clients, network clients, and other libraries).
  
### Application Routing (Next.js)
- The routing system used in the app, defined by the Next.js `app` folder. If you're using pure React, another routing solution (like React Router) will be used.

## Communication Flow

- Communication in this architecture happens **top-down**: 
  - The **presentation layer** communicates with the **application layer**, which in turn communicates with the **data layer**.
  - The application layer doesn’t know about the presentation layer; it only defines payloads and expects the layers above it to handle those payloads.
  - Each layer should only accept payloads and data, not definitions or components, from the layer below it.

## Folder Structure
layer -> feature (what a user can do, not what can see) -> file type -> file.

### Special Notes

- **Data Layer**: Typically handles API calls and direct interaction with backend services.
- **Application Layer**: Responsible for defining business rules and validation (e.g., specific age validation for certain features).
- **Presentation Layer**: Purely for UI, mapping data from the application layer to be presented to the user.
- **Infrastructure Layer**: Includes services like network clients, database clients, or other technical details.
  
### File Types

- **Factories**: Responsible for creating objects from data, especially when the object is instantiated in the same way in multiple places.
- **Services**: Stateless classes that don't manage state or require configuration.
- **Actions**: Similar to API endpoints, they perform multiple operations or actions.
- **Facades**: A simplified interface to several classes or services.
- **Managers**: Perform operations on a given object, providing convenience functions.
- **Entities/Models**: Data models that always have an ID.
- **Schemas**: Define data structures and validation rules, separated where necessary.
- **Props/Types**: Define globally if used across the app, otherwise in same file. 

## Component Structure

Each component has its own folder with the following structure:
components -> user -> index.ts, data.tsx, behavior.tsx, presentation.tsx

This structure allows the **presentation** part of the component to be reused with different **behavior** and **data**. If behavior is shared across components, it can be moved to hooks for reusability. Props are defined in same file but exported in index.ts if needed.

## Communication Between Components

Components can communicate via **Zustand** (for global state) and **Mitt** (for event bus). Both solutions offer efficient and simple methods for state management and inter-component communication.

## Documentation

- **TODO**: Auto-generate documentation with tools like **Swimm**.
- Entry file with setup instructions and important hints.
- Detailed explanations about the overall project structure and libraries used.

## CSS
For each **color** there is a definition in tailwindcss.ts. Colors are overwritten by custom colors, as most of the colors are not needed.
**Text** sizes are being customized according to the sizes that are needed.
**Fonts** are overwritten.
**Spacing** can be extended.
Further **styling** over classname property defained as props. Limit options by configuring tailwindconfig and creating specific components.

## Differences if Using Pure React (Without Next.js)

- **Routing**: You may use a different routing library, such as **React Router**, instead of Next.js routing.
- **Caching**: If you're not using Next.js, you may need to implement custom caching mechanisms.
- **App Structure**: The app structure might differ slightly to accommodate routing and data fetching strategies.

This architecture provides a scalable and maintainable foundation for building middle-to-large size applications using React, React Native, or Next.js.