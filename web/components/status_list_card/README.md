# status_list_card

**JSON `type`:** `status_list_card` · Mel Chat Templates v0.2.1.


Rows of name, short line, and either a status chip or a fix button, under a headline. Used for distribution results, partial generation, expired connections, routine status and missing listing details.

**Fields:** `data.state`, `data.title`, `data.items[]{icon, title, subtitle, badge{text, tone} | action}`.
**Rule:** every row that is not done offers its own fix (Connect, Reconnect, Retry).
**Brand marks:** platform logos are not drawn in Radius UI; use the platform name plus a neutral tile.
