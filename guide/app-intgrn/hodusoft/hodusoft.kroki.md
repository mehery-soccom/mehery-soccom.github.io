sequenceDiagram
    WA->>Mehery: Hi
    Mehery->>+QM:SESSION_START
    Mehery->>+QM:Hi
    QM-->>WA:WelcomeToQucikMenu
    WA->>Mehery:SwitchAppMessage
    Mehery->>QM:SwitchAppMessage
    Note right of Mehery: SessionRoute
    Mehery->>+HS:SESSION_ROUTE
    HS-->>WA:WelcomeToHoduSoft
    WA->>Mehery: Hi
    Mehery->>+HS:Hi
    HS-->>+Mehery:ReplyFromHodusoft
    Mehery-->>+WA:ReplyFromHodusoft
