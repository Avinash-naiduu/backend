export const MESSAGES = {
    // Authentication and Authorization Messages
    UNAUTHORIZED: 'Unauthorized access',
    FORBIDDEN: 'Forbidden',
    INVALID_CREDENTIALS: 'Invalid credentials',
    ACCOUNT_DISABLED: 'Account disabled',
    ACCOUNT_LOCKED: 'Account locked due to multiple failed attempts',
    SESSION_EXPIRED: 'Session expired, please login again',
    ACCESS_DENIED: 'You do not have permission to access this resource',

    // User Registration and Verification Messages
    EMAIL_ALREADY_REGISTERED: 'This email is already registered',
    REGISTRATION_SUCCESS: 'Registration successful',
    REGISTRATION_FAILED: 'Registration failed, please try again',
    INVALID_EMAIL_FORMAT: 'Invalid email format',
    EMAIL_NOT_REGISTERED: 'Email not registered',
    USER_NOT_VERIFIED: 'User not verified. Please check your email to verify your account',
    EMAIL_VERIFIED: 'Email verified successfully',

    // Assessment Related Messages
    ASSESSMENT_NOT_FOUND: 'Assessment not found',
    ASSESSMENT_ALREADY_COMPLETED: 'Assessment already completed',
    ASSESSMENT_IN_PROGRESS: 'Assessment is already in progress',
    EXPIRED_ASSESSMENT: 'This assessment has expired',
    MAX_ATTEMPTS_REACHED: 'Maximum attempts reached for this assessment',
    INSUFFICIENT_FUNDS: 'Insufficient funds to participate in the assessment',

    // Question/Answer Related Messages
    QUESTION_NOT_FOUND: 'Question not found',
    ANSWER_SUBMISSION_SUCCESS: 'Your answer has been successfully submitted',
    ANSWER_SUBMISSION_FAILURE: 'Failed to submit your answer, please try again',

    // Assessment Status and Score Messages
    ASSESSMENT_STARTED: 'Assessment has started',
    ASSESSMENT_ENDED: 'Assessment has ended',
    SCORE_CALCULATED: 'Your score has been calculated',
    SCORE_SUBMISSION_FAILED: 'Failed to submit your score',

    // Assignment Status Messages
    ASSIGNMENT_PENDING: 'Your assignment is still pending',

    // Result and Resource Related Messages
    NO_RESULTS_AVAILABLE: 'No results available for the selected criteria',
    RESOURCE_NOT_FOUND: 'Resource not found',

    // Server and Method Related Messages
    METHOD_NOT_ALLOWED: 'Method not allowed for this endpoint',
    RATE_LIMIT_EXCEEDED: 'Rate limit exceeded, please try again later',
    SERVER_ERROR: 'Internal server error',
    DATABASE_ERROR: 'Database error, please try again later',

    // Success Messages
    SUCCESSFUL_LOGIN: 'Login successful',
    SUCCESSFUL_LOGOUT: 'Logout successful',

    // Password Reset Messages
    PASSWORD_RESET_LINK_SENT: 'Password reset link sent to your email',
    INVALID_PASSWORD_RESET_LINK: 'Invalid or expired password reset link',
    PASSWORD_UPDATED_SUCCESSFULLY: 'Password updated successfully',

    // General Error Messages
    VALIDATION_ERROR: 'Validation failed for the provided data',
    UNEXPECTED_ERROR: 'An unexpected error occurred, please try again later',
};
