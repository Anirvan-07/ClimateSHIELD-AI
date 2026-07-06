from abc import ABC, abstractmethod
from pydantic import BaseModel

class BaseDisasterModule(ABC):
    @property
    @abstractmethod
    def module_name(self) -> str:
        """Returns the module's unique name (e.g., 'cyclone')."""
        pass

    @abstractmethod
    async def process_threat(self, location_query: str) -> BaseModel:
        """Executes the module-specific multi-agent workflow."""
        pass
