export function Documentation(){
    return (
        <>
        <h2>Documentation</h2>
        <pre>
            <code>
            /GET/standings       - return the current standing table sorted by points<br></br>
            <br></br>
            /GET/teams           - return the teams in alphabetical order<br></br>
            <br></br>
            /GET/players         - return list of all players currently registered in the league<br></br>
            <br></br>
            /GET/players/"team_name"     - return list of all players currently in "team_name"<br></br>
            <br></br>
            /GET/fixtures        - return all fixtures in the league for 2022/2023 season<br></br>
            </code>
        </pre>
        </>
    )
}