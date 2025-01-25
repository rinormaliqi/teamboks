### Teamboks UI - Technical Assessment

Hey there! 👋

Ready to build something cool? We're so happy to have you here and can’t wait to see your take on this challenge.

No need to stress about making it perfect – we’re more interested in seeing how you approach building components with flexibility in mind. 

It’s something we’re super passionate about in our daily work, so getting on the same page here is really important to us.

As a tip, checking out other Storybook design systems could be a great source of inspiration ✨

## Setup
```bash
npm install
npm run storybook
```

## Requirements

### Core Features
1. Multiple alert types (success, error, warning, info)
2. Support for layouts:
   - Title + description
   - Description only
   - With/without icon
   - Optional close button
3. Theme/variant customization
4. Accessibility implementation

### Technical Details
- Use React & TypeScript
- Write stories demonstrating component flexibility

### Example Usage
```tsx
<Alert type="success">Operation completed</Alert>

<Alert 
  type="warning"
  title="Update Available"
  description="A new version is ready to install."
/>

<Alert 
  type="info"
  variant="subtle"
  icon={<CustomIcon />}
  onClose={() => {}}
>
  Custom content here
</Alert>
```

### Evaluation Criteria
- Component API design
- Flexibility & reusability
- TypeScript implementation
- Story organization
- Code quality

Time expectation: 2 hours